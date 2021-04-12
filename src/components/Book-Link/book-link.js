import React from 'react';
import style from './style.module.scss';


const link = (props) =>{
	return(
		<>
			<nav className={style.booklinkBlocks}>

			    <span>Ebook :</span>

				<li>
					<a target="_blank"
					  rel="noopener noreferrer"
					  href={props.bookInfo.ebooks.amazon}>Amazon</a>
				</li>
				
				<li>
					<a target="_blank" 
					rel="noopener noreferrer"
					href={props.bookInfo.ebooks.barnes}>Barnes & Noble</a>
				</li>

			</nav>

			<nav className={style.booklinkBlocks}>
			
				<span>Paperback :</span>

				<li>
					<a target="_blank" 
					   rel="noopener noreferrer"
					   href={props.bookInfo.paperback.amazon}>Amazon</a>
				</li>

				<li>
					<a target="_blank"
					   rel="noopener noreferrer"
					   href={props.bookInfo.paperback.barnes}>Barnes & Noble </a>
				</li>

				<li>
					<a target="_blank" 
					   rel="noopener noreferrer"
					   href={props.bookInfo.paperback.booksamillion}>Books A Million</a>
				</li>

			</nav>
		</>
	)
}

export default link;