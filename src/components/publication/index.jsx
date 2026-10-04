import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';

const Publication = ({ publications, loading, googleScholar }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < publications.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-6 h-full w-full">
            {skeleton({ width: 'w-full', height: 'h-6', className: 'mb-2' })}
            {skeleton({ width: 'w-6/12', height: 'h-4', className: 'mb-2' })}
            {skeleton({ width: 'w-full', height: 'h-4' })}
          </div>
        </div>
      );
    }

    return array;
  };

  const renderPublications = () => {
    return publications.map((item, index) => (
      <a
        className={`card shadow-lg compact bg-base-100 ${
          item.link ? 'cursor-pointer' : 'cursor-default'
        }`}
        key={index}
        href={item.link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="p-6 h-full w-full">
          <h2 className="font-semibold text-base-content opacity-60">
            {item.title}
          </h2>
          <p className="text-base-content opacity-50 text-xs mt-1">
            {item.year}
          </p>
          <p className="mt-2 text-base-content text-opacity-60 text-sm">
            {item.authors}
          </p>
          <p className="mt-1 text-base-content text-opacity-60 text-sm italic">
            {item.venue}
          </p>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      {publications?.length !== 0 && (
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <div className="card compact bg-base-100 shadow bg-opacity-40">
                <div className="card-body">
                  <div className="mx-3 flex items-center justify-between mb-2">
                    <h5 className="card-title">
                      {loading ? (
                        skeleton({ width: 'w-40', height: 'h-8' })
                      ) : (
                        <span className="text-base-content opacity-70">
                          Publications
                        </span>
                      )}
                    </h5>
                    {googleScholar &&
                      (loading ? (
                        skeleton({ width: 'w-10', height: 'h-5' })
                      ) : (
                        <a
                          href={`https://scholar.google.com/citations?user=${googleScholar}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-base-content opacity-50 hover:underline"
                        >
                          Google Scholar
                        </a>
                      ))}
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-1 gap-6">
                      {loading ? renderSkeleton() : renderPublications()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

Publication.propTypes = {
  publications: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  googleScholar: PropTypes.string,
};

export default Publication;
