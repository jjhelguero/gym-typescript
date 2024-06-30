import { ClassType, SelectedPage } from '@/shared/types';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from 'framer-motion';
import { HText } from '@/shared/HText';
import { Class } from './Class';

const classes: Array<ClassType> = [
  {
    name: 'Weight Training Classes',
    description:
      "Our weight training classes are designed to help you build strength, boost confidence, and transform your body. Whether you're looking to build muscle, increase endurance, or simply feel more empowered, our weight training classes are the perfect way to take your fitness journey to the next level.",
    image: image1,
  },
  {
    name: 'Yoga  Classes',
    image: image2,
  },
  {
    name: 'Ab Core Classes',
    description:
      'Designed to strengthen and tone the core muscles, enhancing overall stability and fitness. Join our Ab Core classes at EvoGym to build a solid foundation of strength, improve posture, and achieve your fitness goals.',
    image: image3,
  },
  {
    name: 'Adventure Classes',
    description:
      "An exhilarating blend of fitness and fun, perfect for those looking to break free from traditional workouts. Whether you're a seasoned athlete or a fitness newcomer, our Adventure Classes provide a unique and engaging way to stay active, motivated, and excited about your fitness journey. Join us at EvoGym for an adventure that challenges both body and mind.",
    image: image4,
  },
  {
    name: 'Fitness Classes',
    description:
      'A comprehensive and dynamic approach to achieving your health and wellness goals. Join our fitness classes to experience a fun, challenging, and transformative journey towards a healthier, stronger you.',
    image: image5,
  },
  {
    name: 'Training Classes',
    description:
      "A structured and effective path to achieving your fitness aspirations, whether you're looking to build muscle, lose weight, or enhance overall athletic performance. Join us to experience personalized attention, dynamic workouts, and a community dedicated to helping you reach your peak potential.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
      id='ourclasses'
      className='w-full bg-primary-100 py-40'
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className='mx-auto w-5/6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <HText dataTestId='headerOurClasses'>OUR CLASSES</HText>
            <p className='py-5'>
              EvoGym offers a diverse range of fitness classes, catering to all
              interests and intensity levels. From invigorating hot yoga
              sessions to high-intensity workouts, there's something for
              everyone. Their roster includes dance fitness and even hardcore
              sweat-inducing classes. With a commitment to keeping things fresh
              and engaging, you'll never find yourself bored at EvoGym.
            </p>
          </div>
        </motion.div>
        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
          <ul className='w-[2800px] whitespace-nowrap'>
            {classes.map((item: ClassType, index) => {
              return (
                <Class
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              );
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
