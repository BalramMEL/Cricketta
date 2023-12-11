import { useState } from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const MAX_DESCRIPTION_LENGTH = 100; // Define the maximum length for description
const MAX_TITLE_LENGTH = 50; // Define the maximum length for title

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const NewsArticle = (props) => {
    const [shortenedDescription, setShortenedDescription] = useState(
        truncateText(props.article.description, MAX_DESCRIPTION_LENGTH)
    );

    const [shortenedTitle, setShortenedTitle] = useState(
        truncateText(props.article.title, MAX_TITLE_LENGTH)
    );

    const openFullArticle = () => {
        window.open(props.article.url, '_blank'); // Open the article URL in a new tab
    };

    return (
        <Col lg={3} className="my-4" >
            <Card >
                <Card.Img variant="top" src={props.article.urlToImage} style={{ height: '12rem', width: '100%', objectFit: 'cover' }}/>
                <Card.Body>
                    <Card.Title>{shortenedTitle}</Card.Title>
                    <Card.Text>
                        {shortenedDescription}
                    </Card.Text>
                    <Button style={{backgroundColor: "#030f27",color: "#fdbe33", marginLeft:'60px'}} className='mt-2' onClick={openFullArticle}>Read full article</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default NewsArticle;
