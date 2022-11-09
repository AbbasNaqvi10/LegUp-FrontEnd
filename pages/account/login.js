import React from 'react';
import {
    Card,
    Spacer,
    Button,
    Text,
    Input,
    Row,
    Checkbox,
    Container,
} from '@nextui-org/react';

export default function Login() {
    return (
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
                        clearable
                        underlined
                        fullWidth
                        color="primary"
                        size="lg"
                        labelPlaceholder="Email"
                        css={{ mb: '10px' }}
                    />
                    <Spacer y={1} />
                    <Input.Password
                        clearable
                        underlined
                        fullWidth
                        color="primary"
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
                    <Button className='bg-blue-700 hover:shadow-xl hover:shadow-blue-900/80 cursor-pointer' shadow  auto>
                        Sign in
                    </Button>
                    <Spacer y={1} />
                </Card>
            </Container>
        </div>
    );
}