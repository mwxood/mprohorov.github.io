import '../styles/skills.css'

const Skills = (props) => {
    return (
        <div className='skills-card text-center'>
            {props.children}
        </div>
    )
}

export default Skills