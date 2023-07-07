import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="main container">
			<div className="row">
				<div className="col-6">
					<img src=""></img>
				</div>
				<div className="col-6"></div>
				<p></p>
			</div>
			<div className="row">
				<div className="col-2"></div>
				<div className="col-2"></div>
				<div className="col-2"></div>
				<div className="col-2"></div>
				<div className="col-2"></div>
				<div className="col-2"></div>
			</div>			
		</div>
	);
};

export default SingleCharacter
