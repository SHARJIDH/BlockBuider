"use client"
import React, { useEffect, useState } from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader'
import Editor from '../_components/Editor'
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FILE } from '../../dashboard/_components/FileList';
import Canvas from '../_components/Canvas';

function Workspace({ params }: any) {
  const [triggerSave, setTriggerSave] = useState(false);
  const [fileData, setFileData] = useState<FILE | any>();
  const [selectedTab, setSelectedTab] = useState("blocks");

  const convex = useConvex();

  useEffect(() => {
    console.log("FILEID", params.fileId);
    params.fileId && getFileData();
  }, []);

  const getFileData = async () => {
    const result = await convex.query(api.files.getFileById, { _id: params.fileId });
    setFileData(result);
  };

  return (
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* Tab Bar */}
      <div className="flex justify-center border-b rounded-full w-60 mx-auto shadow-2xl">
        <button
          className={`p-2 w-full ${selectedTab === "document" ? "border-b-2 border-blue-500" : ""}`}
          onClick={() => setSelectedTab("document")}
        >
          Document
        </button>
        <button
          className={`p-2 w-full ${selectedTab === "blocks" ? "border-b-2 border-blue-500" : ""}`}
          onClick={() => setSelectedTab("blocks")}
        >
          Blocks
        </button>
      </div>


      {/* Workspace Layout */}
      <div className="h-screen">
        {selectedTab === "document" ? (
          <Editor
            onSaveTrigger={triggerSave}
            fileId={params.fileId}
            fileData={fileData}
          />
        ) : (
          <Canvas
            onSaveTrigger={triggerSave}
            fileId={params.fileId}
            fileData={fileData}
          />
        )}
      </div>
    </div>
  );
}

export default Workspace;
