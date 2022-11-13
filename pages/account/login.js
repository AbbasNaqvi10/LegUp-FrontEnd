import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import Router from 'next/router'

import {
    Card,
    Spacer,
    Button,
    Text,
    Input,
    Row,
    Checkbox,
    Container,
    useInput,
} from '@nextui-org/react';

export default function Login() {

    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [isLoading, setLoading] = useState(false)
    const endpoint = 'http://localhost:3000/api/auth/signin'

    const { emailValue, emailReset, emailBindings } = useInput("");
    const { passwordValue, passwordReset, passwordBindings } = useInput("");

    const validateEmail = (emailValue) => {
        return emailValue.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    };

    const validatePassword = (passwordValue) => {
        return true;
    };

    const emailHelper = React.useMemo(() => {
        if (!emailValue)
            return {
                text: "",
                color: "",
            };
        const isValid = validateEmail(emailValue);
        return {
            text: isValid ? "" : "Enter a valid email",
            color: isValid ? "success" : "error",
        };
    }, [emailValue]);

    const passwordHelper = React.useMemo(() => {
        if (!passwordValue)
            return {
                text: "",
                color: "",
            };
        const isValid = validatePassword(passwordValue);
        return {
            text: isValid ? "" : "Enter a valid password",
            color: isValid ? "success" : "error",
        };
    }, [passwordValue]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const setUser = {
        //     ElementInternals: e.target.ElementInternals.value,
        //     password: e.target.password.value
        // }
        setData.email = e.target[0].value
        setData.password = e.target[1].value
        console.log(data)
        console.log(e.target[0].value + e.target[1].value)
        //console.log(setUser)

        axios.post('http://localhost:3000/login', {
            email: e.target[0].value,
            password: e.target[1].value
        },{
            mode: "no-cors"
        })
            .then(function (response) {
                setLoading(true)
                console.log(response);
                setLoading(false)
                Router.push('/dashboard')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    if (isLoading) return <p>Loading...</p>
    //if (!data) return <p>No profile data</p>


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <Container
                        display="flex"
                        alignItems="center"
                        justify="center"
                        css={{ minHeight: '100vh' }}
                    >
                        <Card css={{ mw: '420px', p: '20px' }} variant="bordered">
                            <Text
                                size={24}
                                weight="bold"
                                css={{
                                    as: 'center',
                                    mb: '20px',
                                }}
                            >
                                LegUp Login
                            </Text>
                            <Spacer y={1} />
                            <Input
                                {...emailBindings}
                                status={emailHelper.color}
                                color={emailHelper.color}
                                helperColor={emailHelper.color}
                                helperText={emailHelper.text}
                                type='email'
                                required
                                underlined
                                fullWidth
                                size="lg"
                                labelPlaceholder="Email"
                                css={{ mb: '10px' }}
                            />
                            <Spacer y={1} />
                            <Input.Password
                                {...passwordBindings}
                                status={passwordHelper.color}
                                color={passwordHelper.color}
                                helperColor={passwordHelper.color}
                                helperText={passwordHelper.text}
                                underlined
                                required
                                fullWidth
                                size="lg"
                                labelPlaceholder="Password"
                                css={{ mb: '10px' }}
                            />
                            <Spacer y={1} />
                            <Row justify="space-between">
                                <Checkbox>
                                    <Text size={14}>Remember me</Text>
                                </Checkbox>
                                <Text size={14}>Forgot password?</Text>
                            </Row>
                            <Spacer y={1} />
                            <Button type='submit' className='bg-blue-700 hover:shadow-xl hover:shadow-blue-900/80 cursor-pointer' shadow auto>
                                Sign in
                            </Button>
                            <Spacer y={1} />
                        </Card>
                    </Container>
                </div>
            </form></>
    );
}