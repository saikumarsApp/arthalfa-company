import {Component} from "react"
import "./index.css";

class Home extends Component {
	state = {
		inputText:"",
		uniqueCount: "",
		inputLength: "",
		searchText: "",
		replaceText: "",
	}

	onChangeText = event => {
		const {inputText, uniqueCount, inputLength} = this.state
		this.setState({inputText: event.target.value})
		let uniqueChars = [... new Set(inputText)]
		if (!inputText)
		{
			this.setState({uniqueCount: ""})
			this.setState({inputLength: ""});
		}
		else{
			this.setState({uniqueCount: uniqueChars.length})
			this.setState({inputLength: inputText.length});
		}
	}

	onClickSearch = event => {
		this.setState({searchText : event.target.value});

	}
	onClickReplace = event => {
		this.setState({replaceText: event.target.value});
	}

	onClickReplaceButton = () => {
		const {searchText, replaceText, inputText} = this.state
		const regex = new RegExp(searchText, "g");
		const result = inputText.replace(regex, replaceText);
		console.log(result);
	}

	render(){
		const {inputText, uniqueCount, inputLength} = this.state
		const lengthOfChars = inputLength;
		return(
			<>
			<div className="main-container">
				<h1 className="main-heading-styling">Real-Time Text Analysis</h1>
				<div>
					<textarea 
					rows="8" className="textarea-styling" 
					onChange={this.onChangeText} 
					type="text"
					id="textarea"
					placeholder="Enter Your Text Here..."
					value={inputText}
					/>
				</div>
				<input 
				type="text" 
				className="searchInput"
				onClick={this.onClickSearch}
				placeholder="Search Text.."
				/>
				<input 
				type="text" 
				className="searchInput"
				onClick={this.onClickReplace}
				placeholder="Replace Text.."
				/>
				<button onClick={this.onClickReplaceButton} className="replace-button" type="button">Replace All</button>
				<div className="analysis-stats-card">
					<div className="unique-characters-card">
						<p className="unique-text-styling">Length of Characters</p>
						<p className="count-styling">{lengthOfChars > 0 ? inputLength : "" }</p>
					</div>
					<div className="unique-characters-card">
						<p className="unique-text-styling">Unique Characters</p>
						<p className="count-styling">{uniqueCount}</p>
					</div>
				</div>
			</div>
			</>
		)
	}
}
export default Home;