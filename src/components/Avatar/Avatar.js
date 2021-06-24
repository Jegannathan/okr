import UserAvatar from '../../assets/avatar-male.svg';

const Avatar = (props) => {
    return (<img src={UserAvatar} alt="user" className={props.styleClass}/>)
}

export default Avatar;