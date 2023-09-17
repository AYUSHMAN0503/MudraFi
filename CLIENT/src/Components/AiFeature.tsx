import { features } from "./style";
import styles , {layout } from "./style";
import Button from "./button";
import { GrUserExpert} from 'react-icons/gr';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface FeatureCardProps {
  icon: any;
  title: any;
  content: any;
  index: any;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px]  ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <FontAwesomeIcon icon={icon}  className="w-[50%] h-[50%] object-contain" />
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
  <section id="features" className={`${layout.section}`}>
    <div id="" className={`${layout.sectionInfo}`}>
      <h2 id=""className={`${styles.heading2} flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600`}>
      AI Features
      </h2>
     
    </div>
    <div id="" className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;

