import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';

export default function GitHubCard () {
    const [gitHubName, setGitHubName] = useState('') 
    const [gitHubURL, setGitHubURL] = useState('')  
    const [gitHubImageURL, setGitHubImageURL] = useState('')    

    useEffect(() => {
        fetch('https://api.github.com/users/rearl89')
        .then(res => res.json())
        .then(data => {
            setGitHubName(data.name)
            setGitHubURL(data.html_url)
            setGitHubImageURL(data.avatar_url)
        })
    }, [])
    return (
        <Card style={{ width: '45rem', margin: "auto", padding: "25px", border: "1px solid black", borderRadius: "10px", backgroundColor: "lightgreen" }}>
          <Card.Img style={{borderRadius: "50%"}} variant="top" src={gitHubImageURL} />
          <Card.Body>
            <Card.Title>{gitHubName} Profile</Card.Title>
            <Card.Text>
              I wish I was better at coding.
            </Card.Text>
            <a href={gitHubURL}><Button variant="primary">Go to my GitHub</Button></a>
          </Card.Body>
        </Card>
      );
}