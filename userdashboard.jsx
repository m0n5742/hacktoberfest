import React, { Component } from "react";
import { Link } from "react-router-dom";

class Rules extends Component {
    render() {
        return (
            <React.Fragment>
                <main> <div className="col align-items-right">
                 <Link className="btn btn-success btn-lg" to="/usersettings">
                                        Settings
                                    </Link></div>
	                <div className="container h-100">
	                  
	                    <div className="row align-items-center h-90">
                            <div class="col-sm-12">
	                            <div className="jumbotron bg-transparent">
	                                <h2>Username</h2>
	                                <h3>Rank</h3>
	                                <hr />
	                                <div className="row">
							<table className="table mt-4 Table">
								<thead>
									<tr>
									<th scope="col">#</th>
									<th scope="col">Challenge Name</th>
									<th scope="col">Category</th>
									<th scope="col">Points</th>
									</tr>
								</thead>
								<tbody>
									<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>bi0s</td>
									<td>10000</td>
									</tr>
									<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>amrita</td>
									<td>500</td>
									</tr>
									<tr>
									<th scope="row">3</th>
									<td>Larry</td>
									<td>s0mewh3re</td>
									<td>150</td>
									</tr>
									<tr>
									<th scope="row">4</th>
									<td>Larry</td>
									<td>s0mewh3re</td>
									<td>150</td>
									</tr>
									
								</tbody>
								</table>
						</div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
                </main>
            </React.Fragment >
        );
    }
}

export default Rules;
