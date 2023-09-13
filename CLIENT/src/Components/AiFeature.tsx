import { features } from "./style";
import styles , {layout } from "./style";
import Button from "./button";

interface FeatureCardProps {
  icon: any;
  title: any;
  content: any;
  index: any;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business: React.FC = () => (
  <section id="features" className={`${layout.section} p-16`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Lorem ipsum dolor sit amet.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati temporibus laborum eius error enim, natus iste reprehenderit blanditiis ab?
      </p>
      <Button styles={`mt-10`} />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;

