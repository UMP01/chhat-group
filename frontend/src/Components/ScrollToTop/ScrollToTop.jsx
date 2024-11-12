import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Optional: If you want to use an icon

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false); // To track hover state

    useEffect(() => {
        // Handle scroll position
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Listen for scroll events
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scroll effect
        });
    };

    // Button style with dynamic hover effect
    const styles = {
        button: {
            position: "fixed",
            bottom: "30px",
            right: "30px",
            backgroundColor: isHovered ? "#0b4f67" : "#0e7490", // Change background color on hover
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 1000,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s, transform 0.2s", // Smooth transition for background and transform
        },
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                style={styles.button}
                aria-label="Scroll to top"
                onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                onMouseLeave={() => setIsHovered(false)} // Set hover state to false
            >
                <FaArrowUp size={20} />
            </button>
        )
    );
};

export default ScrollToTopButton;
    