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

export default function Registration() {
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
            LegUp Registration
          </Text>
          <Spacer y={1} />
          <Input
            clearable
            underlined
            fullWidth
            color="primary"
            size="lg"
            labelPlaceholder="First Name"
            css={{ mb: '10px' }}
          />
          <Spacer y={1} />
          <Input
            clearable
            underlined
            fullWidth
            color="primary"
            size="lg"
            labelPlaceholder="Last Name"
            css={{ mb: '10px' }}
          />
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
            underlined
            fullWidth
            color="primary"
            size="lg"
            labelPlaceholder="Password"
            css={{ mb: '10px' }}
          />
          <Spacer y={1} />
          <Input.Password
            underlined
            fullWidth
            color="primary"
            size="lg"
            labelPlaceholder="Confirm Password"
            css={{ mb: '10px' }}
          />
          <Spacer y={1} />
          <Button className='bg-blue-700 hover:shadow-xl hover:shadow-blue-900/80 cursor-pointer' shadow auto>
            Register
          </Button>
          <Spacer y={1} />
        </Card>
      </Container>
    </div>
  );
}