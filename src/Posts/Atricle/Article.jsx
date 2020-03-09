import React from 'react';

const Fragment=React.Fragment;

export default function Article({id,title,body,tags,handleDeletePost}){

	return (
			 <Fragment>
				<article> 
					<header>
						<h3>{title}</h3>
					</header>
					<section>
					 	<p>{body}</p>
					</section>
					<footer>
						<div className="tags">
						{tags.map((tag,id)=><button className="btn btn-xs btn-default" key={id}>{tag}</button>)}
						</div>
					</footer>
					<div className="controls">
							<button id={id} className="btn btn-danger btn-mini" onClick={(e)=>handleDeletePost(e)}>удалить</button>
					</div>
				</article>
			</Fragment>
		);
};

