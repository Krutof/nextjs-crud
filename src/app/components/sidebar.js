import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside>
        <div className="sidebar">
            <h4 className="sidebar-title">ทั่วไป</h4>
            <ul className="sidebar-nav">
                <li className="sidebar-item">
                    <Link className="sidebar-link" href="/about">
                        ข้อมูลพื้นฐาน
                    </Link>
                </li>
            </ul>
            <h4 className="sidebar-title">ประชาสัมพันธ์</h4>
            <ul className="sidebar-nav">
                <li className="sidebar-item">
                    <Link className="sidebar-link" href="/about">
                        ข่าวประชาสัมพันธ์
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link className="sidebar-link" href="/about">
                        ข่าวประกาศ
                    </Link>
                </li>
            </ul>
        </div>

    </aside>
  );
};

export default Sidebar;