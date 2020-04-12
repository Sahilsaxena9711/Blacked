import React, { useState, useEffect } from 'react';
import sw from "./styles/switch.css";
import dm from "./styles/dark-mode.css";

export default function Blacked(props) {
    const initialMode = localStorage.getItem("mode") || "light";
    const [mode, setMode] = useState(initialMode)

    useEffect(() => {
        if (localStorage.getItem("mode")) {
            const newMode = initialMode;
            setMode(newMode);
            document.body.classList.add(newMode === "light" ? dm.light : dm.dark);
            localStorage.setItem("mode", newMode);
        }
    }, []);

    const onModeChange = () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        localStorage.setItem("mode", newMode);
        document.body.classList.add(newMode === "light" ? dm.light : dm.dark);
        document.body.classList.remove(mode !== "light" ? dm.dark : dm.light);
    }

    const getSwitchStyle = () => {
        const position = props.position || "top-right";
        switch (position) {
            case "top-right":
                return {
                    top: "1rem",
                    right: "1rem"
                };
            case "top-left":
                return {
                    top: "1rem",
                    left: "1rem"
                };
            case "bottom-right":
                return {
                    bottom: "1rem",
                    right: "1rem"
                };
            case "bottom-left":
                return {
                    bottom: "1rem",
                    left: "1rem"
                };
            default:
                return {
                    top: "1rem",
                    right: "1rem"
                };
        }
    }

    const renderSwitch = () => (
        <div
            style={getSwitchStyle()}
            className={`${sw.switchContainer}`}
        >
            <label className={`${sw.switch}`}>
                <input
                    onChange={onModeChange}
                    checked={mode === "dark"}
                    type={"checkbox"}
                />
                <span className={`${sw.slider} ${sw.round}`} />
            </label>
        </div>
    );

    return (
        <div>
            {renderSwitch()}
            {props.children}
        </div>
    );
}


Blacked.defaultProps = {
    position: "top-right",
}