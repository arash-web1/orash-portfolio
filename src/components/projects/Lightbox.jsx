import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { X } from "lucide-react";
import SafeImage from "../common/SafeImage";

function Lightbox({
  image,
  title,
  onClose,
}) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <button
            className="lightbox-close"
            onClick={onClose}
          >
            <X size={20} />
          </button>

          <motion.div
            className="lightbox-content"
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
            }}
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >
            <SafeImage
              src={image}
              alt={title}
              fallbackTitle="Screenshot unavailable"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Lightbox;