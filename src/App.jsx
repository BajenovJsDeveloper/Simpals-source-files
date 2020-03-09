import React from 'react';
import Posts from './Posts/Posts.jsx';
import FormContainer from './Form/FormContainer.jsx';



const Fragment=React.Fragment;

export default class App extends React.Component {

  constructor(props){
	  super(props);
	  this.state={article:null}
  }	
  //--- adding  new article to the posts
  addArticle=(article)=>{
  	this.setState({article})
  }

  render(){
  	let article=this.state.article
  	return (
		    <Fragment>
		       <section>
			        <div  id="posts" className='well'>
				        <Posts article={article}
				        	   handleSaveToLocaleStorage={this.handleSaveToLocaleStorage}/>
				    </div>
				    <FormContainer handleAddPost={this.addArticle}/>
		       </section>
		    </Fragment>
		  );
  }  
}


