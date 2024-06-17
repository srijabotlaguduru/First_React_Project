import classes from './post.module.css';

export default function Post(props){   
  return (
    <li className={classes.post}>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.message}>{props.message}</p>
    </li>
    
  );
}
