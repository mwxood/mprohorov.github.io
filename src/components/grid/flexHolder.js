const FlexHolder = (props) => {
    return(
        <div className="full-width d-flex justify-content-between align-items-center">{props.children}</div>
    )
}

export default FlexHolder