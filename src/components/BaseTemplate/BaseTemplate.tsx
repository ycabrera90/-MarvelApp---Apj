import { FC, memo } from "react";
import styles from "./BaseTemplate.module.scss";

export interface IBaseTemplate {
  className?: string;
  sampleTextProp: string;
}

const BaseTemplate: FC<IBaseTemplate> = ({ className, sampleTextProp }) => {
  return (
    <div
      className={[styles.container, className ? className : ""].join(" ")}
      data-testid="BaseTemplate"
    >
      {sampleTextProp}
    </div>
  );
};

export default memo(BaseTemplate);
