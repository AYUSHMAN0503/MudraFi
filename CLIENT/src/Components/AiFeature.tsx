import { features } from "./style";
import styles , {layout } from "./style";
interface FeatureCardProps {
  title: any;
  content: any;
  index: any;
}

const FeatureCard: React.FC<FeatureCardProps> = ({title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px]  ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
   
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-500 text-[18px] leading-[23.4px] mb-1">
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
      <h3 id="" className={`${styles.heading3} flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600`}> 
        Dig deeper into WEB3 world by using
      </h3>
      <h2 id="" className={`${styles.heading2} flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600`}>
        AI Analytics
      </h2>

     
    </div>
    <div id="" className={`flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
