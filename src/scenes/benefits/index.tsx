import { HText } from '@/shared/HText';
import { BenefitType, SelectedPage } from '@/shared/types';
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { Benefit } from './benefit';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import { ActionButton } from '@/shared/ActionButton';

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: 'State of the Art Facilities',
    description:
      'At EvoGym, we offer state-of-the-art facilities designed to cater to all fitness levels. Our gym is equipped with the latest fitness equipment, including a wide range of gym, free weights, and racks. These are available for all members, from beginners to avid gym-goers. Our facilities are designed with your comfort and convenience in mind, ensuring that you have everything you need to achieve your fitness goals with ease.',
  },
  {
    icon: <UserGroupIcon className='h-6 w-6' />,
    title: "100's of Diverse Classes",
    description:
      "EvoGym offers hundreds of diverse fitness classes, ensuring there's something for everyone, regardless of their interests or fitness levels. From calming yoga sessions to adrenaline-pumping high-intensity workouts, our class selection is constantly updated to keep your fitness journey exciting and engaging. Whether you're looking to dance, lift, stretch, or sweat, you'll find it here at EvoGym.",
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: 'Expert and Pro Trainers',
    description:
      "At EvoGym, we have a team of expert and professional trainers who are dedicated to helping you reach your fitness goals. Our trainers are knowledgeable in various areas of fitness and nutrition, ensuring you receive personalized guidance and support. Whether you're a beginner or a seasoned athlete, our trainers will meet you at your level and help you progress. They are committed to providing true care, both on and off the gym floor, making your fitness journey enjoyable and rewarding.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id='benefits'
      className='mx-auto min-h-full w-5/6 py-20'
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className='md:my-5 md:my-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText dataTestId='headerBenefits'>MORE THAN JUST A GYM.</HText>
          <p className='my-5 text-sm'>
            EvoGym is not just a place to work out - it's a community of
            like-minded individuals who share a passion for fitness and
            wellness. Whether you're looking to transform your body or simply
            find a sense of belonging, EvoGym is the perfect place to take your
            fitness journey to the next level.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className='mt-5 item-scenter jusitfy-between gap-8 md:flex'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          {/* GRAPHIC */}
          <img
            className='mx-auto'
            src={BenefitsPageGraphic}
            alt='benefits-page-graphic'
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{' '}
                    <span className='text-primary-500'>FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION*/}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className='my-5'>
                EvoGym is proud to have millions of satisfied members worldwide.
                These individuals have achieved their fitness goals with our
                world-class equipment, trainers, and classes. Our commitment to
                providing true care for each member has resulted in a global
                community that is not only physically fitter but also more
                confident and empowered. Join us today and become part of this
                growing, happy family, striving towards their dream fitness
                goals.
              </p>
              <p className='mb-5'>
                Come join the millions of members in getting to your dream
                fitness goals and sign up today!
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton
                  onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                  href={`#${SelectedPage.ContactUs}`}
                  label='Join Now'
                  dataTestId='benefitsJoinNowButton'
                ></ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
