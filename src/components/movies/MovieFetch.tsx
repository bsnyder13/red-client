import React from "react"

export class MovieFetch extends React.Component {

    // var APIKey = '424753-MovieSug-O0FVIDJK

    constructor(props: any) {
        super(props)
        this.state = {
            loaded: false,
            results: [],
        }

    }

    async componentDidMount() {
        let res = await fetch('https://tastedive.com/api/similar?q=movie:ghostbusters&k=424753-MovieSug-O0FVIDJK&limit=5')
        let json = await res.json()

        this.setState({
            loaded: true,
            results: json,
        })
        console.log(this.state)
    }

    async componentDidUpdate() {
        // let { similar, results } = this.state

    }

    render() {
        return (
            <div>
                {/* {
                    !this.state.loaded
                    ? "Loading"
                    : this.state.results.map(movie=> {})
                } */}
            </div>
        )
    }
}

