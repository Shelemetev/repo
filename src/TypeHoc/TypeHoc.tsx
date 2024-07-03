
const TypeHoc = (Component) => {
    const TypeComponent = (props) => {

        type TypeProps = typeof props

        return (
            <Component {...props} />
        )
    }

    return TypeComponent

}