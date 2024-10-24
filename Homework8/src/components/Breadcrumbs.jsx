import React from "react";
import { Link } from "react-router-dom";
import { useBreadcrumbs } from "./BreadcrumbsContext";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className="breadcrumbs">
      <div className="wrap">
        <div className="breadcrumbs__box">
          {breadcrumbs.length > 0 && (
            <div className="breadcrumbs__title">{breadcrumbs[breadcrumbs.length - 1].label}</div>
          )}
          <ul className="breadcrumbs__nav">
            {breadcrumbs.map((breadcrumb, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <li
                  key={index}
                  className={`breadcrumbs__item ${isLast ? "active" : ""}`}
                >
                  {!isLast ? (
                    <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
                  ) : (
                    <span>{breadcrumb.label}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
