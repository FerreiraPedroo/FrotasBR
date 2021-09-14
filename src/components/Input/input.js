import classes from "./input.module.css"

export function Input(props) {
    console.log(props)

    const classJoin = classes.input + " "+ classes[props.size]
    // console.log(className)

    return (
        <input {...props} className={classJoin}></input>
    )

}