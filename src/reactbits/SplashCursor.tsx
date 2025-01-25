import { useEffect } from "react";

const SplashCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement;

    const updateCursorPosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (cursor) {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
      }
    };

    const addSplashEffect = () => {
      const cursor = document.querySelector(".custom-cursor");
      if (cursor) {
        cursor.classList.add("splash-effect");
        setTimeout(() => {
          cursor.classList.remove("splash-effect");
        }, 600); // Duration of the animation
      }
    };

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("click", addSplashEffect); // Trigger splash effect on click

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("click", addSplashEffect);
    };
  }, []);

  return (
    <div className="custom-cursor" />
  );
};

export default SplashCursor;
