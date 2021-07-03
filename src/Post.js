import './Post.css';
import Avatar from '@material-ui/core/Avatar/Avatar';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar className='post__avatar' src={photoUrl}>
          {name[0]}
        </Avatar>
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post__body'>
        <p>{message}</p>
      </div>
      <div className='post__buttons'>
        <InputOption title='Like' Icon={ThumbUpAltOutlinedIcon} color='grey' />
        <InputOption title='Comment' Icon={ChatOutlinedIcon} color='grey' />
        <InputOption title='Share' Icon={ShareOutlinedIcon} color='grey' />
        <InputOption title='Send' Icon={SendOutlinedIcon} color='grey' />
      </div>
    </div>
  );
}

export default Post;
