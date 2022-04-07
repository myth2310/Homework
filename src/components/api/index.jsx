import React, { useState } from 'react';
import './playlist-form.css';
import { Redirect } from 'react-router-dom';

function PlaylistForm({authorized}){
	if(!authorized){
		return <Redirect to="/"/>
	}
	return (
		<form className="forms">
			<div className="playlist-form">
				<div className="label-input-container">
					<h3 size="title">Create Playlist</h3>
					<label htmlFor="title">Title </label>
					<input
						id="title"
						type="text"
						className="input"
					/>
					<label htmlFor="description">Description </label>
					<textarea
						id="description"
						type="text"
						className="input description"		
					/>
					<input type="submit" className="submit-playlist" />
				</div>
			</div>
		</form>
	);
};

export default PlaylistForm;
