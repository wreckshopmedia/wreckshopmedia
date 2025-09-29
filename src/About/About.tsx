import { Box, Title, Text } from '@mantine/core';
import { useAboutStyles } from './useAboutStyles';
import { PageHelmet, useGlobalStyles } from '../Global';
import { SkullLogo } from '../SkullLogo/SkullLogo';

export function About() {
  const { classes, cx } = useAboutStyles();
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box id="about">
      <PageHelmet title="About" description="Learn more about our company" />
      <Box mt="80px" className={cx(globalClasses.page, classes.aboutOuter)}>
        <Title order={1} ta="center">
          ABOUT THE FLERP
        </Title>
        <Title order={4} ta="center">
          Little Subtitle Of Stuff and Craps
        </Title>

        <SkullLogo size="200px" />

        <Text component="p">
          This is some paragraph text that describes Wreck Shop Media LLC. We are a small web
          development and digital marketing agency located in beautiful Fort Collins, Colorado. We
          love building websites and helping businesses grow their online presence through various
          digital marketing strategies. Our team is passionate about what we do and we strive to
          deliver the best possible results for our clients. Whether you're looking for a new
          website, need help with SEO, or want to run a social media campaign, we've got you
          covered. Contact us today to learn more about how we can help your business succeed
          online!
        </Text>
        <Text component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quia asperiores reprehenderit
          quam accusamus labore! Nam at possimus autem dolor nostrum reprehenderit vel alias, quo
          libero doloribus cum, dolores adipisci explicabo ab quod, rerum magnam aliquid asperiores
          obcaecati aliquam. Quae commodi iusto nobis hic excepturi dolorum. Optio ex adipisci porro
          dolorem temporibus eos quam aperiam consectetur. Numquam dolores, facilis voluptates
          magnam rem mollitia nisi quisquam eos dicta repellat at eligendi debitis voluptatum eum
          eius cumque maxime? Tempore saepe aspernatur dolorem, atque eaque voluptatum tenetur ipsum
          tempora magni error. Quam corporis eligendi, quibusdam cupiditate exercitationem nesciunt
          sunt, ab officia reiciendis iusto, dignissimos saepe! Consequatur, aperiam porro iure
          nihil accusamus, assumenda a corrupti ducimus iusto magni ullam, magnam dolores quibusdam
          aspernatur quaerat corporis rem adipisci asperiores laborum voluptatibus sunt autem
          recusandae ab! Repellendus quae, earum provident eaque officia, quisquam labore autem
          magnam aspernatur temporibus mollitia. Inventore officia libero neque, consectetur
          accusamus nam nemo accusantium quas aliquid, eaque, iure quibusdam. Nesciunt veritatis aut
          facilis. Ullam consectetur qui dolore, iusto dolorum tenetur quaerat illum, officiis in
          voluptas animi hic repellendus consequuntur aliquid nobis ipsa. Tenetur molestias harum
          sunt quidem! Quia alias quisquam enim quae saepe? Quisquam laborum eius consectetur,
          libero
        </Text>
        <Text component="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi minus quisquam aperiam
          minima inventore, accusantium neque molestiae? Culpa iusto et amet voluptate minus
          pariatur maxime reprehenderit molestias rerum, sequi nobis nemo odio eos nam accusamus
          natus excepturi expedita est illum debitis facere veritatis nesciunt. Amet, ad? Blanditiis
          sint sapiente, laboriosam corrupti, aliquid, quidem dolores ipsam repudiandae nulla quam
          error ducimus voluptatibus facilis maxime quas velit. Natus nam minima laudantium
          repudiandae ducimus atque reiciendis possimus dolorem nihil optio aliquam, modi iusto
          eaque provident? Adipisci minus repellat sed praesentium unde cumque similique quos
          asperiores repellendus, nostrum corporis facilis nihil. Obcaecati ut tenetur quos deleniti
          enim nemo, eveniet repudiandae, vitae itaque, maxime aspernatur aperiam architecto! Sed,
          cupiditate? Hic cumque vel molestias laboriosam mollitia velit totam est dolor dolores. Ex
          omnis reiciendis libero corrupti. Enim, iure saepe unde rerum a tempora quidem modi
          eligendi doloremque, autem odit eos illum laborum quia aut, fugiat nemo. Consequatur
          veniam eveniet corporis dolore qui sed cupiditate quod necessitatibus dignissimos
          repellendus. Rerum suscipit officia, nemo nobis excepturi quos atque fuga quae pariatur
          doloribus dolorem labore necessitatibus eaque minus? Facilis modi libero cupiditate
          laborum vel iure inventore mollitia tempore, accusamus fugit ipsa expedita exercitationem?
          Non assumenda iste quia beatae minima! Dolores fugiat aperiam dolorem dignissimos possimus
          ipsum ab, provident perferendis facilis asperiores quos aspernatur ea similique omnis
          nihil et neque, magnam esse aliquid? Itaque, similique aliquid! A laudantium eligendi
          nobis aut aperiam reprehenderit. Dolorum amet magni ipsa asperiores temporibus fugiat, ut
          velit, ad ipsum fuga ducimus reprehenderit quos, magnam commodi?
        </Text>

        <Text component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quia asperiores reprehenderit
          quam accusamus labore! Nam at possimus autem dolor nostrum reprehenderit vel alias, quo
          libero doloribus cum, dolores adipisci explicabo ab quod, rerum magnam aliquid asperiores
          obcaecati aliquam. Quae commodi iusto nobis hic excepturi dolorum. Optio ex adipisci porro
          dolorem temporibus eos quam aperiam consectetur. Numquam dolores, facilis voluptates
          magnam rem mollitia nisi quisquam eos dicta repellat at eligendi debitis voluptatum eum
          eius cumque maxime? Tempore saepe aspernatur dolorem, atque eaque voluptatum tenetur ipsum
          tempora magni error. Quam corporis eligendi, quibusdam cupiditate exercitationem nesciunt
          sunt, ab officia reiciendis iusto, dignissimos saepe! Consequatur, aperiam porro iure
          nihil accusamus, assumenda a corrupti ducimus iusto magni ullam, magnam dolores quibusdam
          aspernatur quaerat corporis rem adipisci asperiores laborum voluptatibus sunt autem
          recusandae ab! Repellendus quae, earum provident eaque officia, quisquam labore autem
        </Text>
      </Box>
    </Box>
  );
}
