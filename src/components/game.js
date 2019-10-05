import React from 'react';

const images = [];

class Image extends React.Component {
    render() {
        return (
            <div>
                <img onClick={this.props.onClick}
                    width="200"
                    height="200"
                    src={this.props.src}
                />
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(12).fill(null),
            images: [
                {
                    id: 1,
                    src: "../assets/images/1.jpg",
                    clicked: false
                },
                {
                    id: 2,
                    src: "../assets/images/2.jpg",
                    clicked: false
                },
                {
                    id: 3,
                    src: "../assets/images/3.jpg",
                    clicked: false
                },
                {
                    id: 4,
                    src: "../assets/images/4.jpg",
                    clicked: false
                },
                {
                    id: 5,
                    src: "../assets/images/5.jpg",
                    clicked: false
                },
                {
                    id: 6,
                    src: "../assets/images/6.jpg",
                    clicked: false
                },
                {
                    id: 7,
                    src: "../assets/images/7.jpg",
                    clicked: false
                },
                {
                    id: 8,
                    src: "../assets/images/8.jpg",
                    clicked: false
                },
                {
                    id: 9,
                    src: "../assets/images/9.jpg",
                    clicked: false
                },
                {
                    id: 10,
                    src: "../assets/images/10.jpg",
                    clicked: false
                },
                {
                    id: 11,
                    src: "../assets/images/11.jpg",
                    clicked: false
                },
                {
                    id: 12,
                    src: "../assets/images/12.jpg",
                    clicked: false
                }
            ]
        };
    }

    handleClick = id => {
        const clickedCard = this.state.images.filter(c => c.id === id)[0];
        console.log(clickedCard);

        images.push(clickedCard.id);
        console.log(images);

        if (images.includes(clickedCard.id)) {
            const newImages = this.state.images.map(image => {
                if (image.id === id) {
                    return Object.assign({}, image, { clicked: true });
                }
            });

            this.setState({
                images: newImages
            });
        }

    }

    renderImage(image) {
        return (
            <Image onClick= {() => this.handleClick(image.id)} 
                src={image.src} />
        );
    }

    render() {
        return (
            <div>{this.renderImage(this.state.images[2])}</div>
        )
    }
}

export default Game;