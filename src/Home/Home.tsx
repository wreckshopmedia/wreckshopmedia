import { Box, Title, Text} from '@mantine/core';
import { useHomeStyles } from './useHomeStyles';


export function Home() {
  const { classes } = useHomeStyles();

  return (
    <Box className={classes.homeOuter}>
      <Title order={1}>HOME PAGE WEEEEE</Title>
      <Text component="p">This is the home page of the application.</Text>
    </Box>
  );
}
