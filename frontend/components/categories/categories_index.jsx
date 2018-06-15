import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class CategoriesIndex extends React.Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.props.fetchCategories()
  }

  render(){
    return (
      <div className="Events-index">
        <img className="Nav-bar-image" src="https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=510608b1165db1e48889a8a059dd5d1e&auto=format&fit=crop&w=1050&q=80" width="900px" height="400px"/>
        <div className="center">
          {this.props.categories.map(category =>
            <Link to={`/categories/${category.id}`} key={category.id} className="category-index-link"><div className="events-div category-index-link" key={category.id}>
              <img id={`category-${category.id}`} className="event-image category-image" src={category.img_url}/>
              <h1 className="index-category-name">{category.name}</h1>
            </div>
          </Link>
          )}
        </div>
      </div>
    )
  }
}

export default CategoriesIndex;
