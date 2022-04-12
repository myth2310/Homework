import React, { useEffect, useState } from 'react';
import TableBody from '../../table/table-body';
import './table.css';

const Table = ({ data }) => {
	const [selected, setSelected] = useState([]);

	const handleSelect = (uri) => {
		setSelected([...selected, uri]);
	};

	const handleDelete = (uri) => {
		setSelected(selected.filter((item) => item !== uri));
	};

	useEffect(() => {
		// console.log(selected);
	}, [selected]);
	
	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardGrid}>
				{data.map((data, id) => (
					<Card
						data={data}
						id={id}
						key={id}
						handleSelect={handleSelect}
						handleDelete={handleDelete}
						selected={selected}
					/>
				))}
			</div>
		</div>
	);
};
// 		<div className="table-container">
// 			<table>
// 				<thead>
// 					<tr>
// 						<th>#</th>
// 						<th>Title</th>
// 						<th>Artist</th>
// 						<th>Album</th>
// 						<th>Select Song</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{data.map((data, id) => (
// 						<TableBody
// 							data={data}
// 							id={id}
// 							key={id}
// 							handleSelect={handleSelect}
// 							handleDelete={handleDelete}
// 							selected={selected}
// 						/>
// 					))}
// 				</tbody>
// 			</table>
// 		</div>
	);
};

export default Table;
