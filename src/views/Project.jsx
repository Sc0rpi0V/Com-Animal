import { useState } from "react";
import CustomButton from "../components/Boutons/CustomButton";
import Animation from "../components/Animation/Animation";
import "./style/Settings.css";
import ListProjects from "../components/ListProjects/ListProjects";

const Project = () => {
    const [textButton, setTextButton] = useState("");
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div className="project">
            <h1 className="check">Check</h1>
            <p className="paracheck"> Il faut juste entrer un texte, et le bouton affichera le texte saisi.</p>
            <div className="clickme">
                <CustomButton
                    inputValue={inputValue}
                    textButton={textButton}
                    setTextButton={setTextButton}
                />
                <input type="text" onChange={handleChange} />
            </div>
            <ListProjects />
            <Animation />
        </div>
    );
}

export default Project;