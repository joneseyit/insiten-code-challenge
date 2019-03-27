import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

class CompanyList extends Component {
    render(){
        return (
            <Card.Group>
                <Card>
                <Card.Content>
                    <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
                    <Card.Header>The Mobile Group</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                    Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green'>
                        Approve
                    </Button>
                    <Button basic color='red'>
                        Decline
                    </Button>
                    </div>
                </Card.Content>
                </Card>
                <Card>
                <Card.Content>
                    <Image floated='right' size='mini' src='/images/avatar/large/molly.png' />
                    <Card.Header>Molly Thomas</Card.Header>
                    <Card.Meta>New User</Card.Meta>
                    <Card.Description>
                    Molly wants to add you to the group <strong>musicians</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green'>
                        Approve
                    </Button>
                    <Button basic color='red'>
                        Decline
                    </Button>
                    </div>
                </Card.Content>
                </Card>
                <Card>
                <Card.Content>
                    <Image floated='right' size='mini' src='/images/avatar/large/jenny.jpg' />
                    <Card.Header>Jenny Lawrence</Card.Header>
                    <Card.Meta>New User</Card.Meta>
                    <Card.Description>Jenny requested permission to view your contact details</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green'>
                        Approve
                    </Button>
                    <Button basic color='red'>
                        Decline
                    </Button>
                    </div>
                </Card.Content>
                </Card>
            </Card.Group>
        )
    }
}

export default CompanyList