import React, { useEffect, useRef } from "react";

type FlowProps = {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
};

export default function Flow({
  src,
  className = "",
  style,
  alt = "Flow visual",
}: FlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const glRef = useRef<any>(null);

  useEffect(() => {
    // Provide a minimal Rect class expected by gl-images.js
    if (!(window as any).Rect) {
      (window as any).Rect = class Rect {
        element: HTMLElement;
        width = 0;
        height = 0;
        _onResize: any;
        constructor(element: HTMLElement) {
          this.element = element;
          this._onResize = this.onResize.bind(this);
          window.addEventListener("resize", this._onResize);
        }
        onResize() {
          const r = this.element.getBoundingClientRect();
          this.width = r.width;
          this.height = r.height;
        }
        destroy() {
          window.removeEventListener("resize", this._onResize);
        }
      };
    }

    let instance: any;
    let ro: ResizeObserver | null = null;

    (async () => {
      // Import the WebGL flowmap module (which imports OGL from unpkg)
      const mod = await import("./gl-images.js");
      const { GLImage } = mod as any;

      const el = containerRef.current;
      const img = imgRef.current;
      if (!el || !img) return;

      // Mark container as expected by the module and ensure src
      el.setAttribute("data-gl-image", "");
      img.src = src;

      instance = new GLImage(el);
      // Now that renderer exists, compute sizes and apply
      if (typeof instance.onResize === "function") {
        instance.onResize();
      }
      // Ensure canvas overlays the container and fills it
      const canvas: HTMLCanvasElement | undefined = instance?.renderer?.gl?.canvas;
      if (canvas) {
        Object.assign(canvas.style, {
          position: "absolute",
          inset: "0",
          display: "block",
          width: "100%",
          height: "100%",
        } as CSSStyleDeclaration);
      }
      // Observe container size changes
      if ('ResizeObserver' in window && el) {
        ro = new ResizeObserver(() => {
          if (typeof instance.onResize === 'function') instance.onResize();
        });
        ro.observe(el);
      }
      glRef.current = instance;
    })();

    return () => {
      if (glRef.current && typeof glRef.current.stop === "function") {
        glRef.current.stop();
      }
      if (ro) {
        ro.disconnect();
        ro = null;
      }
      const el = containerRef.current;
      el && el.removeAttribute("data-gl-image");
    };
  }, [src]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "relative", ...style }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
          display: "block",
          opacity: 0,
          pointerEvents: "none",
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
