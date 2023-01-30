import React from "react";

interface NavbarModalProps {
  modal: boolean;
  setModal: (modal: boolean) => void;
}

const NavbarModal: React.FC<NavbarModalProps> = ({ modal, setModal }) => {
  return (
    <div>
      {modal ? (
        <div className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm opacity-100">
          <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 opacity-100 scale-10">
            <div className="flex justify-between">
              <h1 className="text-zinc-700">Navigation</h1>
              <button onClick={() => setModal(false)}>
                <h1 className="text-sm font-semibold">X</h1>
              </button>
            </div>
            <ul className="pt-5 -my-2 divide-y divide-zinc-100 text-base text-zinc-800">
              <li>
                <a href="" className="block py-2 text-zinc-600">
                  test
                </a>
              </li>
              <li>
                <a href="" className="block py-2 text-zinc-600">
                  test
                </a>
              </li>
              <li>
                <a href="" className="block py-2 text-zinc-600">
                  test
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarModal;
