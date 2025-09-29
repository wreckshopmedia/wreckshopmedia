import { Flex, Box } from '@mantine/core';
import { useColorCheckerStyles } from '.';

export function ColorChecker() {
  const { classes } = useColorCheckerStyles();

  const boxSize = 'clamp(15px, calc(0.5vw + 3vh), 40px)';

  return (
    <Box className={classes.colorCheckerOuter}>
      <Flex justify="center" align="center">
        <Box w={boxSize} h={boxSize} className={classes.blackBox} />
        <Box w={boxSize} h={boxSize} className={classes.blackBox} />
        <Box w={boxSize} h={boxSize} className={classes.blackBox} />
        <Box w={boxSize} h={boxSize} className={classes.blackBox} />
        <Box w={boxSize} h={boxSize} className={classes.blackBox} />
        <Box w={boxSize} h={boxSize} className={classes.blackBox} />
        <Box w={boxSize} h={boxSize} className={classes.blackBox} />
      </Flex>
      <Flex justify="center" align="center">
        <Box w={boxSize} h={boxSize} className={classes.blueBox} />
        <Box w={boxSize} h={boxSize} className={classes.blueBox} />
        <Box w={boxSize} h={boxSize} className={classes.blueBox} />
        <Box w={boxSize} h={boxSize} className={classes.blueBox} />
        <Box w={boxSize} h={boxSize} className={classes.blueBox} />
        <Box w={boxSize} h={boxSize} className={classes.blueBox} />
        <Box w={boxSize} h={boxSize} className={classes.blueBox} />
      </Flex>
      <Flex justify="center" align="center">
        <Box w={boxSize} h={boxSize} className={classes.yellowBox} />
        <Box w={boxSize} h={boxSize} className={classes.yellowBox} />
        <Box w={boxSize} h={boxSize} className={classes.yellowBox} />
        <Box w={boxSize} h={boxSize} className={classes.yellowBox} />
        <Box w={boxSize} h={boxSize} className={classes.yellowBox} />
        <Box w={boxSize} h={boxSize} className={classes.yellowBox} />
        <Box w={boxSize} h={boxSize} className={classes.yellowBox} />
      </Flex>
      <Flex justify="center" align="center">
        <Box w={boxSize} h={boxSize} className={classes.peachBox} />
        <Box w={boxSize} h={boxSize} className={classes.peachBox} />
        <Box w={boxSize} h={boxSize} className={classes.peachBox} />
        <Box w={boxSize} h={boxSize} className={classes.peachBox} />
        <Box w={boxSize} h={boxSize} className={classes.peachBox} />
        <Box w={boxSize} h={boxSize} className={classes.peachBox} />
        <Box w={boxSize} h={boxSize} className={classes.peachBox} />
      </Flex>
      <Flex justify="center" align="center">
        <Box w={boxSize} h={boxSize} className={classes.whiteBox} />
        <Box w={boxSize} h={boxSize} className={classes.whiteBox} />
        <Box w={boxSize} h={boxSize} className={classes.whiteBox} />
        <Box w={boxSize} h={boxSize} className={classes.whiteBox} />
        <Box w={boxSize} h={boxSize} className={classes.whiteBox} />
        <Box w={boxSize} h={boxSize} className={classes.whiteBox} />
        <Box w={boxSize} h={boxSize} className={classes.whiteBox} />
      </Flex>
    </Box>
  );
}
