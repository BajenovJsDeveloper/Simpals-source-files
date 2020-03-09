import React from 'react';
import Article from './Atricle/Article.jsx'
import postsArray from './posts.json';



const Fragment=React.Fragment;
export default class Posts extends React.Component{
	constructor(props){
		super(props);
		this.article=null;
		//----initialize LocalStorage with posts 
		//--- if no data in localStorage, save data to localStorage from post.json file
		if(localStorage.getItem('userPosts')===null)
		  		localStorage.setItem('userPosts',JSON.stringify(postsArray));
		//---- reading data from localStorage userPosts
		this.state={posts:JSON.parse(localStorage.getItem('userPosts'))};
		// console.log('rerender');
	}
	//--- generating  new list of Articles  from newPostData
	getArticles(newPostData){
		return newPostData.map(post=>{
			return(
					<Article  title={post.title}
							  key={post.id}
							  id={post.id}
							  body={post.body}
							  tags={post.tags}
							  handleDeletePost={this.handleDeletePost}/>
				)
			});
	}
	 //---- handle to save new userPosts data to localStorage
 	saveToLocaleStorage(newPostsData){
  		localStorage.setItem('userPosts',JSON.stringify(newPostsData));
  	}
  	//---  delete article from post
  	//---  save сhanged data to loclalStorage
	handleDeletePost=(e)=>{
		let postId=e.target.id;
		let newPostData=this.state.posts.filter(post=>post.id!=postId);
		this.setState({posts:newPostData});
		this.saveToLocaleStorage(newPostData);
	}
	//--- getting maximum number of article id
	getMaxId(){
		
		return Math.max(0,...this.state.posts.map(article=>Number(article.id)));
	}
	//---  updating posts when added new article 
	componentDidUpdate(){
		let newArticle=this.props.article;
			if(newArticle!==this.article){
				let newPostData=this.state.posts;
				this.article=newArticle;
				//--- add  id to last post article
				newArticle.id=this.getMaxId()+1;
				newPostData.push(newArticle);
				this.setState({posts:newPostData});
				this.saveToLocaleStorage(newPostData);
			}
	}

	render(){
		//--- generating articles to Wrapper
		let wrapperAtricles=this.getArticles(this.state.posts);
		return(
			   <Fragment>
				{wrapperAtricles}
			   </Fragment>
			);
	}
}