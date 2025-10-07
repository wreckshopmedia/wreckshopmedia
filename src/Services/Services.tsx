import { Box, Title, Text } from '@mantine/core';
import { useServicesStyles } from './useServicesStyles';
import { PageHelmet, useGlobalStyles } from '../Global';

export function Services() {
  const { classes, cx } = useServicesStyles();
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box id="services">
      <PageHelmet title="Services" description="Learn more services our company" />
      <Box className={cx(globalClasses.page, classes.servicesOuter)}>
        
        <Title order={1}>SERVICES PAGE STUFF</Title>
        <Text component="h3">Huzzah, here is the stuff we does do things ya</Text>
        <Text component="p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo consequuntur voluptate
          accusamus sint, ex quos illo labore sed quia nemo quasi molestiae necessitatibus. Quasi
          odit cumque error dolorum distinctio sequi quis dignissimos provident neque maiores magnam
          sed non cupiditate nihil dolorem facere excepturi, quae, molestiae, quas voluptatem
          assumenda fugit veniam quod. Nostrum ipsam adipisci voluptate harum accusantium ratione.
          Numquam quaerat natus veritatis ad deleniti, tempore nesciunt eaque sint deserunt
          voluptate voluptatum dolorem aperiam vitae velit! Nam at vitae qui incidunt, consectetur
          fugiat quaerat consequuntur laboriosam voluptatibus quam culpa deleniti dolore, tempore
          hic cumque? Sequi sit, accusantium officiis iusto maiores aliquam. Error minus facilis
          iste dignissimos ipsum vitae, qui minima enim, ad sequi at quaerat numquam eaque, tempora
          accusamus voluptas nemo harum non! Dolor aperiam sunt, est impedit alias blanditiis?
          Eveniet error sapiente similique assumenda exercitationem ratione soluta non hic aut quia
          culpa facere voluptatum et fugiat, unde magni debitis quisquam quidem? Nisi veniam
          praesentium eum necessitatibus impedit corporis magni, ut, aperiam, ullam placeat itaque
          facere soluta rem! Dolorum autem earum suscipit iste, accusamus totam at porro impedit
          laudantium quod, atque sequi! Excepturi dolorem minus quia distinctio. Vitae, quae
          voluptas sed officia cumque dolore? Voluptate fuga impedit alias, nam asperiores numquam!
        </Text>
        <Text component="p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias cupiditate numquam,
          consequuntur voluptas iusto adipisci non quaerat, sit, iste ab vitae debitis architecto?
          Culpa sit natus libero architecto nobis animi incidunt? Rerum hic itaque nulla iure ex,
          suscipit molestias illo quia veritatis expedita minima exercitationem quae ratione. Vitae,
          non saepe. Saepe quibusdam placeat, adipisci quidem hic perferendis, cumque consequuntur
          vero corrupti accusamus odit, ducimus excepturi earum deleniti nesciunt sequi
          exercitationem ipsa inventore? Quis, ratione. Quasi pariatur repudiandae nostrum libero
          quaerat adipisci rem nemo officia vero. Ipsam consequatur tempora harum sit sint amet ex
          veniam aspernatur quasi vitae hic, dicta, esse, laborum cumque consequuntur ea praesentium
          id itaque exercitationem molestiae a! Corporis odit maiores quam voluptatibus quasi
          deleniti minima vitae non nesciunt ex? Natus ipsa sint porro quia quas facere architecto?
        </Text>
        <Text component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Quisquam
          molestias, cumque, aliquid, reprehenderit laboriosam magnam expedita corporis officiis
          aspernatur quas fuga! Quisquam, quidem. Quisquam molestias, cumque, aliquid, reprehenderit
          laboriosam magnam expedita corporis officiis aspernatur quas fuga! Quisquam, quidem.
          Quisquam molestias, cumque, aliquid, reprehenderit laboriosam magnam expedita corporis
          officiis aspernatur quas fuga! Quisquam, quidem. Quisquam molestias, cumque, aliquid,
          reprehenderit laboriosam magnam expedita corporis officiis aspernatur quas fuga!
        </Text>

        <Text component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Quisquam
          molestias, cumque, aliquid, reprehenderit laboriosam magnam expedita corporis officiis
          aspernatur quas fuga! Quisquam, quidem. Quisquam molestias, cumque, aliquid, reprehenderit
          laboriosam magnam expedita corporis officiis aspernatur quas fuga! Quisquam, quidem.
          Quisquam molestias, cumque, aliquid, reprehenderit laboriosam magnam expedita corporis
          officiis aspernatur quas fuga! Quisquam, quidem. Quisquam molestias, cumque, aliquid,
          reprehenderit laboriosam magnam expedita corporis officiis aspernatur quas fuga!
        </Text>
      
      </Box>
    </Box>
  );
}
