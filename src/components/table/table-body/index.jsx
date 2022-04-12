import React from 'react';
import styles from './card-module.css';

const Card = ({ data, handleSelect, selected, handleDelete }) => {
	return (
		<div className="card">
			<img src={data.album.images[0].url} alt="" className="cardImage" />
			<div className="flex">
				<div>
					<div className="title" >{data.name}</div>
					<div className="description">{data.artists[0].name}</div>
					<div className="description">{data.album.name}</div>
				</div>
				<div>
					{selected.includes(data.uri) ? (
						<button
							className={`${styles.cardbutton} ${styles.deselect}`}
							onClick={() => handleDelete(data.uri)}
						>
							Deselect
						</button>
					) : (
						<button
							className={`${styles.cardbutton} ${styles.select}`}
							onClick={() => handleSelect(data.uri)}
						>
							Select
						</button>
					)}
				</div>
			</div>
		</div>

);
};

export default Card;


// const TableBody = ({ data, id, handleSelect, selected, handleDelete }) => {
// 	return (
// 		<tr>
// 			<td>{id + 1}</td>
// 			<td>
// 				<div className="title-content">
// 					<img src={data.album.images[0].url} alt="" />
// 					<div className="song-title">
// 						<div>{data.name}</div>
// 					</div>
// 				</div>
// 			</td>
// 			<td className='artist'>{data.artists[0].name}</td>
// 			<td  className='album'>{data.album.name}</td>
// 			<td className="button-container">
// 				{selected.includes(data.uri) ? (
// 					<button className="deselect" onClick={() => handleDelete(data.uri)}>
// 						Deselect
// 					</button>
// 				) : (
// 					<button className="select" onClick={() => handleSelect(data.uri)}>
// 						Select
// 					</button>
// 				)}
// 			</td>
// 		</tr>
// 	);
// };

// export default TableBody;
