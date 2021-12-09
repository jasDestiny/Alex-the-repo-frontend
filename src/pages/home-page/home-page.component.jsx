import React from "react";
import CardList from "../../components/card-list/card-list.component";
import SearchBox from "../../components/search-box/search-box.component";
import "./home-page.styles.css";


const request = require("../../utility/utility-functions");

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  async componentDidMount() {
    const path = "/allprojects";

    const data = JSON.parse(localStorage.getItem("userAuthData"))

    try {
      const result = await request(path, {
        userid: data.userid});
      
      this.setState({
        projects: result,
      });

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <CardList services = {this.state.services} searchInput = {this.props.searchInput} />
      </div>
    );
  }
}

export default Home;
