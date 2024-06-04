



export default function renderResource(resource: any) {
    switch (resource.type) {
      case "video":
        return (
          <video
            src={resource.url}
            controls
            className="  w-full min-w-[15vw] max-w-[50vw] min-h-[50vh]  "
          />
        );
      // TODO: make the logic to fetch the video from the server
      case "image":
        return (
          <img
            src={resource.url}
            alt={resource.name}
            className="  w-full min-w-[15vw] max-w-[50vw] min-h-[50vh]  "
          />
        );
      case "pdf":
        return (
          <embed
            src={resource.url}
            type="application/pdf"
            className="  w-full min-w-[15vw] max-w-[50vw] min-h-[50vh]  "
          />
        );
      case "code":
        return (
          <embed
            src={resource.url}
            type="application/pdf"
            className="  w-full min-w-[15vw] max-w-[50vw] min-h-[50vh]  "
          />
        );
      default:
        return null;
    }
  }
  