import classes from "./button.module.css"

export function Button(props) {
    let classNameJoin = "";
    function classJoin() {
        for (let i = 0; i < classSize; i++) {
            classNameJoin += classes[props.size.split(" ")[i]] + " ";
        };
        classNameJoin += " " + classes.button;
    }
    let classSize = props.size !== undefined ? props.size.split(" ").length : 0;
    if (classSize !== 0) classJoin();



    return (
        <button {...props} className={classNameJoin}>{props.textbutton}</button>
    )



}