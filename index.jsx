import React, { useState } from 'react';
import './playlist-form.css';

function PlaylistForm(){
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
					<div className="minimum">*Minimal 10 karakter</div>
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
