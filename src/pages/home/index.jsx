import React, { useState } from 'react';
import { Login, Table } from '../../components';
import './home.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Home = () => {
	const [value, setValue] = useState('');
	const [expiredToken, setExpiredToken] = useState(false);
	const [accessToken] = useState(
		window.location.hash
			.substring(1, window.location.hash.length - 1)
			.split('&')[0]
			.split('=')[1]
	);
	const [result, setResult] = useState([]);

	const handleChange = (e) => {
		e.preventDefault();
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let url = `https://api.spotify.com/v1/search?type=track&limit=10&q=${value}`;

		fetch(url, {
			headers: {
				Authorization: 'Bearer ' + accessToken,
			},
		})
			.then((res) => res.json())
			.then((res) => {
				if (typeof res.error === 'object') {
					setExpiredToken(true);
				} else {
					setResult(res.tracks.items);
				}
			});
	};

	return (
	
			<div className="item-container">
				{accessToken ? (
					<>
						{expiredToken ? (
							<>
								<h1 size="center">
									token yang kamu gunakan sudah kadaluarsa
								</h1>
								<h3 size="center">
									Tapi jangan panik, klik tombol dibawah untuk kembali ke
									halaman login
								</h3>
								<div onClick={() => (window.location = '/')} className="button">
									Kembali
								</div>
							</>
						) : (
							<>
								<Box
									component="form"
									sx={{
										'& > :not(style)': { m: 4, width: '25ch' },
									}}
									noValidate
									autoComplete="off"
									onSubmit={(e) => handleSubmit(e)}
									>
									<TextField 
										id="outlined-basic" 
										label="Search Music" 
										variant="outlined" 
										type="text"
										value={value}
										onChange={(e) => handleChange(e)}
										className="text-field"
									/>
									{/* <input type="submit"  className="submit-button" value="Search" /> */}
									<Button variant="contained" color="success" type="submit" >
									Search
									</Button>
							</Box>
							</>
						)}
						{!result.length ? null : (
							<>
								<h1 size="title">Daftar Lagu</h1>
								<Table data={result} />
							</>
						)}
					
					</>
				) : (
					<Login />
				)}
			</div>
		
	);
};

export default Home;
