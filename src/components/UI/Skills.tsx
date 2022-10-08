import '../styles/skills.css'
import { PropsChildren } from '../../types/'

const Skills: React.FC<PropsChildren> = (props) => {
    return (
        <div className='skills-card text-center'>
            {props.children}
        </div>
    )
}

export default Skills